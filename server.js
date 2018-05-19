var http = require('http');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');
var xml = require('xml');

function upload(request, response) {
    console.log('Processing the upload...');

    if (request.method == 'POST') {

        var post = new formidable.IncomingForm();
        
        post.parse(
            request,
            function (err, fields, files) {
                if (err) {
                    return500(response, err);
                } else {
                    var file;
                    /*
                    This code supposes that Upload Suite is configured to have two converters: 
                    the first one for the original files, the second one - for thumbnails.
        
                    More about converters in Upload Suite: 
                	
                    http://www.aurigma.com/docs/us8/JA_T_J_$au_converter.htm
                	
                    */

                    for (var i = 0; i < fields.PackageFileCount; i++) {
                        file = files['File0_' + i];
                        if (file === undefined) {
                            return500(response, 'File0_' + i + ' is undefined.');
                        } else {
                            fs.createReadStream(file.path).pipe(fs.createWriteStream('gallery/' + file.name));
                            console.log("File %s received.", file.name);
                            file = files['File1_' + i];
                            if (file === undefined) {
                                return500(response, 'File1_' + i + ' is undefined.');
                            } else {
                                fs.createReadStream(file.path).pipe(fs.createWriteStream('gallery/thumbnails/' + file.name));
                                console.log("Thumbnail %s received.", file.name);
                            }
                        }
                    }

                    response.writeHead(200, { 'Content-Type': 'text/plain' });
                    response.end('');
                }
            }
        );  

    } else {
        return500(response, 'This page is not intended for browsing. You should send POST requests only.');
    }
}

/*
Gallery page is just a list of thumbnails of all JPEGs stored in the gallery folder. 
For simplicity, no template engine is used, it just generates the whole page using xml
module. In a real life application, you should use your favorite template engine instead.
*/

function gallery(request, response) {
    var pg = {
        html: [
            {
                head: [
                    { title: 'Gallery' },
                    { link: [{ _attr: { href: '/styles/style.css', rel: 'stylesheet', type: 'text/css' } }] }
                ]
            },
            {
                body: [
                    { h1: [{ _attr: { class: 'header2' } }, 'Gallery'] },
                    {
                        p:
                            [{ a: [{ _attr: { href: '/index.htm' } }, 'Add more JPEGs'] }]
                    }]
            }
        ],
    };
    
    fs.readdir('gallery', function (err, files) {

        if (err) {
            return500(response, err);
        }
        console.log('*** total files uploaded :' + files.length);
        /*
          Removing all entries from the file list which are not JPEGs.
        */
        for (var i = 0; i < files.length; i++) {
            console.log(files);
            var nameComponents = files[i].split('.');
            var fileType = nameComponents[nameComponents.length - 1].toLowerCase();
            if ( fileType != 'jpg' && fileType != 'jpeg' && fileType != 'png') {
                files.splice(i, 1);
                i--;
            }
        }
        console.log('*** valid files uploaded :' + files.length);
        /*
          Creating a table of thumbnails, each row contains 3 cells. 
        */
       
        var tbl = { table: [] };
        var tr = null;
        for (var i = 0; i < files.length / 3; i++) {
            tr = { tr: [] };
            for (var j = 0; j < 3; j++) {
                if (i * 3 + j < files.length) {
                    // var pthFile = '/gallery/thumbnails/' + encodeURIComponent(files[i * 3 + j]) + '_Thumbnail1.jpg';
                    // console.log(pthFile);
                    tr.tr.push({
                        td: [
                            {
                                a: [
                                    { _attr: { href: '/gallery/' + encodeURIComponent(files[i * 3 + j]) } },
                                    { img: [{ _attr: { src: '/gallery/thumbnails/' + encodeURIComponent(files[i * 3 + j]) + '_Thumbnail1.jpg' } }] }
                                ]
                            }
                        ]
                    });
                } else {
                    tr.tr.push({ td: '' });
                };
            };
            tbl.table.push(tr);
        }
        pg.html[1].body.push(tbl);
        response.writeHead(200, 'text/html');
        response.end(xml(pg));
    });
}

function startPage(request, response) {
    openStatic(response, 'index.htm', 'text/html');
}

function openStatic(response, pathname, contentType) {
    console.log("Loading static content from %s", pathname);
    fs.readFile(decodeURIComponent(pathname), function (err, data) {
        if (err) {
            switch (err.code) {
                case 'ENOENT':
                    return404(response, pathname);
                    break;
                default:
                    return500(response, err);
            }
            console.log(err);
        }
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(data);
    });
}

function return500(response, err) {
    response.writeHead(500, { 'Content-Type': 'text/plain' });
    response.end('Server error: \n\n ' + err);
}

function return404(response, pathname) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('URL ' + pathname + ' not found.\n');
}

/*
Made for convenience - you can load this code to Cloud9 IDE or 
run it locally without having to change the code. 
*/
// var ip = '127.0.0.1';
// var port = 8765;
// if (process.env.PORT === undefined) { process.env.PORT = port; }
// if (process.env.IP === undefined) { process.env.IP = ip; }

/*
Make sure that gallery and gallery/thumbnail folders exist. 
*/

fs.mkdir('gallery/', function (err) { });
fs.mkdir('gallery/thumbnails/', function (err) { });

http.createServer(function (request, response) {


    var pathname = url.parse(request.url).pathname;
    var parts = pathname.split('.');
    var ext = parts[parts.length - 1].toLowerCase();
    pathname = pathname.substring(1, pathname.length);
    var mime = {
        'htm': 'text/html',
        'css': 'text/css',
        'js': 'application/javascript',
        'jar': 'application/jar',
        'cab': 'application/cab',
        'png': 'image/png',
        'gif': 'image/gif',
        'jpg': 'image/jpeg',
    };

    var actions = {
        '/': startPage,
        '/upload': upload,
        '/gallery': gallery
    }

	/*
	  If the URL extension is known (like .htm, .jpg, etc), we interpret
	  this request as a static content. If it has no extension, it means 
	  that it is an action. If we know this action, we route the request 
	  to the appropriate function, otherwise, we return 404 error.
	*/
    if (mime[ext] != undefined) {
        openStatic(response, pathname, mime[ext]);
    } else {
        if (typeof (actions[ext]) === 'function') {
            actions[ext](request, response);
        } else {
            return404(response, pathname);
        }
    }
}).listen(process.env.PORT || 3000);
console.log("Running Aurigma sample server (localhost:%s)...",  process.env.PORT || 3000);