const http = require("http");
const axios = require("axios");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        axios.post('http://localhost:10101/api/graphql', {
            query: "query LiveTimingState {\n  liveTimingState {\n    TrackStatus\n  }\n}",
            operationName: "LiveTimingState"
        })
        .then(response => {
            res.write(JSON.stringify(response.data.data.liveTimingState));
            res.end();
        })
    }
});


server.listen(3000);
console.log("Server is running on PORT: 3000");
