(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var s=n(1),a=n(10),o=(n(0),n(167)),r={id:"doc1",title:"Advanced node js",sidebar_label:"Advanced node js"},i={id:"doc1",title:"Advanced node js",description:"## Node != javascript",source:"@site/docs/advanced-node.md",permalink:"/docs-and-blog/docs/doc1",sidebar_label:"Advanced node js",sidebar:"someSidebar"},c=[{value:"Node != javascript",id:"node--javascript",children:[{value:"V8 and libuv",id:"v8-and-libuv",children:[]},{value:"Node repl",id:"node-repl",children:[]},{value:"Global, process, buffer",id:"global-process-buffer",children:[]},{value:"modularity in node",id:"modularity-in-node",children:[]}]},{value:"Concurrency and event loop",id:"concurrency-and-event-loop",children:[]},{value:"Event driven architecture",id:"event-driven-architecture",children:[]},{value:"Node for networking",id:"node-for-networking",children:[{value:"net server",id:"net-server",children:[]},{value:"dns module",id:"dns-module",children:[]},{value:"UDP sockets",id:"udp-sockets",children:[]}]},{value:"Node for web server",id:"node-for-web-server",children:[]},{value:"modules",id:"modules",children:[]},{value:"Streams",id:"streams",children:[]},{value:"Clusters and child processes",id:"clusters-and-child-processes",children:[{value:"cluster",id:"cluster",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(s.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"node--javascript"},"Node != javascript"),Object(o.b)("h3",{id:"v8-and-libuv"},"V8 and libuv"),Object(o.b)("p",null,"Default node VM. Node can use also the Chakra core."),Object(o.b)("p",null,"libuv abstracts non blocking io operations (file system, network sockets). Libuv is the one providing node with the event loop."),Object(o.b)("h3",{id:"node-repl"},"Node repl"),Object(o.b)("p",null,"Node.js comes with virtual environment called REPL (aka Node shell). REPL stands for Read-Eval-Print-Loop. The default repl can be imported as a module and by calling the ",Object(o.b)("inlineCode",{parentName:"p"},"start")," function it can be extended."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"--harmony flag - for using staged features of the V8. There are specific harmony flags for each in progress feature of V8.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"-p evaluates and prints the results of a string. ",Object(o.b)("inlineCode",{parentName:"p"},'node -p "os.cpus()"')," prints the processors node sees.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"node cli provides autocomplete buy tabbing on any object or variable.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"v8.getHeapStatistics() prints heap data to the console")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"underscore '_' prints the last computed value"))),Object(o.b)("h3",{id:"global-process-buffer"},"Global, process, buffer"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"global")," is the only true global variable in node. We should avoid using it."),Object(o.b)("p",null,"The process object is a brigde between the node app and the running environment. It is an instance of Event Emitter. So we can listen for example to the process.on('exit') event executed when the event loop has nothing else to process or ",Object(o.b)("inlineCode",{parentName:"p"},"process.exit")," is manually executed. Be careful when listening to the ",Object(o.b)("inlineCode",{parentName:"p"},"process.uncaughtException")," event since that will prevent node from exiting the process unless you manually execute ",Object(o.b)("inlineCode",{parentName:"p"},"process.exit")," on that listener."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"process.versions")," gets all the node modules versions.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"process.env")," provides the user environment. If we modify process.env we are not modifying the original user environment. process.env should only be accessed through a centralized config file."))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Buffer")," is a chunk of memory outside of the v8 heap. When reading we have to specify an encoding. Buffers are created with alloc, allocUnsafe, from. allocUnsafe won't fill the memory space and that means there can be some old data there. Buffers are useful for reading files or any binary data access."),Object(o.b)("p",null,"When converting a buffer to a string always use StringDecoder since it handles multi byte characters and inclomplete multi byte characters."),Object(o.b)("h3",{id:"modularity-in-node"},"modularity in node"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"require.resolve")," does not load the module, it can be used to check if a package is available or not."),Object(o.b)("p",null,"node caches every required module for any other requests. The cache is managed in an array inside require ",Object(o.b)("inlineCode",{parentName:"p"},"require.cache"),". Automaticaly gets index.js inside directories."),Object(o.b)("p",null,"module.exports contains what will be exported to other modules."),Object(o.b)("p",null,"require can also get jsons (JSON.parse) files and c++ addons compiled into .node files (process.dlopen). ",Object(o.b)("inlineCode",{parentName:"p"},"node-gyp")," is used for compiling files."),Object(o.b)("p",null,"We can use the exports object to export properties but we cannot replace the exports object directly, for that we use the module.exports. Exports is a variable reference to module.exports."),Object(o.b)("p",null,"Scoping modules in node is done by wrapping the module in a function with five arguments. exports, require, module, ",Object(o.b)("strong",{parentName:"p"},"filename, "),"dirname. It keeps the top level variables scoped to that module. exports is a reference to module.exports"),Object(o.b)("h2",{id:"concurrency-and-event-loop"},"Concurrency and event loop"),Object(o.b)("p",null,"The event loop. Slow i/o operations are handled by events and callbacks. i/o operations can be memory disk network or other processes. Disk and netwokr resources are the most expensive operations. Node minimizes waiting time. Node does not use threads, it's single threaded."),Object(o.b)("p",null,"The event loop picks events from the event queue and pushes their callbacks to the call stack. It starts when a script is started and exited when no more callbacks or process.exit is called."),Object(o.b)("p",null,"V8 has a call stack and a heap. The heap is where objects are stored in memory. Both are part of the runtime engine not node itself. The loop is provided by the libuv."),Object(o.b)("p",null,"The call stack is a stack of functions. Only one stack. Only one function executed at a time. When executing a script every time we step into a function it is pushed into the stack and everytime we return from a function it gets popped out of the stack. It is printed on errors."),Object(o.b)("p",null,"Queue is a queue of events to be executed. When executing we move the callback to the stack. settimeout is provided by node and node executes a timer out of the runtime freeing the call stack to process more items. When the timer finishes node sends the callback to the event queue. Then the event loop will take events form the queue and add them to the stack when the stack is empty."),Object(o.b)("p",null,"When the timer delay is 0, it works in the same way as setImmediate. The callbacks will be executed after we are done with the stack. setImmediate can take precedende over settimeout with 0. process.nexttick is not part of the event loop, callbacks are processed after the current operation completes and before the event loop continues. process.nexttick can be used when returning a custom error in a async function asyncronussly."),Object(o.b)("h2",{id:"event-driven-architecture"},"Event driven architecture"),Object(o.b)("p",null,"Event emitter objects provide the functions emit and on to emit or listen to events. The on method adds listener functions."),Object(o.b)("h2",{id:"node-for-networking"},"Node for networking"),Object(o.b)("h3",{id:"net-server"},"net server"),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"const server = require('net').createServer();\n")),Object(o.b)("p",null,"Now the server is an instance of event emitter and we can listen ",Object(o.b)("inlineCode",{parentName:"p"},"on")," connections. There, we get a socket. The socket implements a duplex stream interface so that we can write to clients and read from clients. The reading handlers will get the data as buffers."),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"server.on('connection', socket => {\n  console.log('Client connected');\n  socket.write('Welcome new client!\\n');\n\n  socket.on('data', data => {\n    console.log('data is:', data);\n    socket.write('data is: ');\n    socket.write(data);\n  });\n\n  socket.on('end', () => {\n    console.log('Client disconnected');\n  });\n});\n")),Object(o.b)("p",null,"We also have to listen to a port to run the server"),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"server.listen(8000, () => console.log('Server bound'));\n")),Object(o.b)("p",null,"For making a basic chat we can read data from the sockets and write that data to every connected client. For this we should track all sockets and handle connections and disconnections."),Object(o.b)("h3",{id:"dns-module"},"dns module"),Object(o.b)("p",null,"node provides a dns native module. lookup can translate urls into IPs, it uses libuv the rest of the methods uses the network. reverse is the opposite of lookup."),Object(o.b)("h3",{id:"udp-sockets"},"UDP sockets"),Object(o.b)("p",null,"In node we can use the native module dgram. With its own methods for creating and running the server."),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"const dgram = require('dgram');\nconst server = dgram.createSocket('udp4');\nserver.bind(PORT, HOST);\n")),Object(o.b)("p",null,"The message event is called every time the client posts a message with the message and remote information."),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"server.on('message', (msg, rinfo) => {\n  console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);\n});\n")),Object(o.b)("p",null,"For creating clients we use the same module and initialization but run ",Object(o.b)("inlineCode",{parentName:"p"},".send"),"."),Object(o.b)("h2",{id:"node-for-web-server"},"Node for web server"),Object(o.b)("p",null,"Use http module. The request event is called with every request with the request and the response."),Object(o.b)("p",null,"https is http over tls or ssl. node provides the https module to use it. It receives one object parameters with options such as key and cert"),Object(o.b)("p",null,"node can also be a http client using also the http module with functions like ",Object(o.b)("inlineCode",{parentName:"p"},"http.request")," and ",Object(o.b)("inlineCode",{parentName:"p"},"http.get")),Object(o.b)("p",null,"url.parse parses urls into the different segments or parts of a url. querystring module converts models into querystrings that can be used for urls. It also parses querystrings into objects."),Object(o.b)("h2",{id:"modules"},"modules"),Object(o.b)("p",null,"os provides access to the os info. cpu, operating system, network interfaces, os version etc"),Object(o.b)("p",null,"fs filesystem operations, sync and async. Async are error first, sync throw errors. readdir reads a whole directory into an array of file names. truncate truncates file content. stat gives meta info about the file. utimes changes the timestamp. watch watches for events in a directory."),Object(o.b)("p",null,"console. trace prints the call stack"),Object(o.b)("p",null,"util. deprecate can wrap a function that will show a deprecation warning."),Object(o.b)("p",null,"node comes with a debugger that can be activated by ",Object(o.b)("inlineCode",{parentName:"p"},"node debugger index.js"),". sb adds breakpoints to line, cont continues, repl is used for inspecting, watch adds watchers to variables, list shows the current line that's being executed. --inspect will open the debugger in chrome."),Object(o.b)("h2",{id:"streams"},"Streams"),Object(o.b)("p",null,"many built in modules implement streams. collections of data that might not be always available and dont have to fit in memory. It allows to avoid buffering big chunks of data in memory."),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"const src = fs.createReadStream('./big.file');\nsrc.pipe(res);\n")),Object(o.b)("p",null,"Readable, writable, duplex, transform"),Object(o.b)("p",null,"readable is the origin, writable is the destination, duplex are both and transform is a duplex that transforms the data. All streams are instances of event emitter. pipe can be chained (over duplexes)."),Object(o.b)("p",null,"readable can be paused or flowing (pull/push). In flowing mode we have to listen to events of that data. resume() and pause() methods switch between the states."),Object(o.b)("h2",{id:"clusters-and-child-processes"},"Clusters and child processes"),Object(o.b)("p",null,"Multiprocess is the only scalability for node. For scaling an app we can clone the app, decompose its functionalities (microservice), split the app into instances (horizontal partitioning)."),Object(o.b)("p",null,"child_process module can run system commands in child processes. For creating child processes we can use spawn, fork, exec, execfile. They have sync versions."),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"const { spawn } = require('child_process');\n\nconst child = spawn('find', ['.', '-type', 'f']);\n\nchild.stdout.on('data', (data) => {\n  console.log(`child stdout:\\n${data}`);\n});\n\nchild.stderr.on('data', (data) => {\n  console.error(`child stderr:\\n${data}`);\n});\n\nchild.on('exit', function (code, signal) {\n  console.log(`child process exited with code ${code}, signal ${signal}`);\n});\n")),Object(o.b)("p",null,"the spawn function returns a child process instance that implements the event emitter so we can register handlers for events like 'exit', disconnect, error, message (the child process uses process.send), close... Every child process has attached streams stdin, stdout, stderror, when those are close the process is closed and the close event is emitted. Those streams can have registered listeners to their events. The spawn function streams the data returned from the command."),Object(o.b)("p",null,"child processes streams can be piped to share data among processes."),Object(o.b)("p",null,"exec method creates a shell and buffers all the data returned from the command."),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"const { exec } = require('child_process');\n\nexec('find . -type f | wc -l', (err, stdout, stderr) => {\n  if (err) {\n    console.error(`exec error: ${err}`);\n    return;\n  }\n\n  console.log(`Number of files ${stdout}`);\n});\n")),Object(o.b)("p",null,"execfile executes a file and does not use a shell."),Object(o.b)("p",null,"fork allows to exchange messages with the child process with process.send or child.send and listening to the message event in the process."),Object(o.b)("h3",{id:"cluster"},"cluster"),Object(o.b)("p",null,"enable load balancing and forks the application process as many time as cpu cores. Helps to implement the clonning strategy to one machine. the cluster module is native. A master process decides (round robin by default) which worker process takes the request. 1 master, multiple workers."),Object(o.b)("p",null,"create a cluster file that if it's master will call fork to create as many processes as cpus in the machine and if it's a child will require the server file with the server configuration. When forking the cluster file it will be run in worker mode with the isMaster flag set to false."),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"const cluster = require('cluster');\nconst os = require('os');\n\nif (cluster.isMaster) { // or !isWorker\n  const cpus = os.cpus().length;\n\n  console.log(`Forking for ${cpus} CPUs`);\n  for (let i = 0; i<cpus; i++) {\n    cluster.fork();\n  }\n} else {\n  require('./server');\n}\n")),Object(o.b)("p",null,"Each process has its own event loop, queue, call stack..."),Object(o.b)("p",null,"The master cluster can access its workers through cluster.workers (object) and send messages with worker.send(). In the workers (server.js) we can get the received messages by listening to process.on 'message'."),Object(o.b)("p",null,"The master is notified whenever a child exits listening to the 'exit' envent. It can generate new workers when they crash. It can also kill or disconnect workers with those methods."),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"  cluster.on('exit', (worker, code, signal) => {\n    if (code !== 0 && !worker.exitedAfterDisconnect) {\n      console.log(`Worker ${worker.id} crashed. ` +\n                  'Starting a new worker...');\n      cluster.fork();\n    }\n  });\n")),Object(o.b)("p",null,"The exitedAfterDisconnect indicates if the worker was disconnected by the master. We can use singals to let the master know that it has to disconnect the workers. In linux, signals sent to processes can be listened to as an event on process. process.on('SIGUR2'..."),Object(o.b)("p",null,"pm2 can be used to simplify cluster management."),Object(o.b)("p",null,"State should be shared between workers (redis, db). You can also use sticky load balancing (if your load balance allows it), keep records on the master of which user talked with which worker, latter requests by that user will go to the same worker."))}d.isMDXComponent=!0}}]);