'use strict';

function date(req, res) {
    res.setHeader("Content-type", "text/html; charset=utf-8");
    res.setHeader("Transfer-Encoding", "chunked");
    global.connections.push(res);
}

module.exports = {
  date
};
