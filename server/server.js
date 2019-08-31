const express = require('express');
var app = express();
app.post('/api/v1/bitsonic/buy', (req, res) => {
    try {
        input = req.body;
    } catch (error) {
        console.log(error);
    }
    const result = buyCoin(input);
    if (result) {
        const response = {
            result: {
                message: "OK",
                uuid: ""
            },
            return_code: 1,
            timestamp: Date.now(),
            http_code: 200
        };
        res.json(response);
    } else {
        res.http_code = 500;
        return res.json(
            {
                errors: 'ERROR'
            }
        )
    }
});

buyCoin = (input) => {
    /**
     * interact with database or middleware functions here for transaction
     * */
    return true;
}


app.post('/api/v1/bitsonic/sell', (req, res) => {
    try {
        input = req.body;
    } catch (error) {
        console.log(error);
    }
    const result = sellCoin(input);
    if (result) {
        const response = {
            result: {
                message: "OK",
                uuid: ""
            },
            return_code: 1,
            timestamp: Date.now(),
            http_code: 200
        };
        res.json(response);
    } else {
        res.http_code = 500;
        return res.json(
            {
                errors: 'ERROR'
            }
        )
    }
});

sellCoin = (input) => {
  /**
     * interact with database or middleware functions here for transaction
     * */
    return true;
}


app.post('/api/v1/bitsonic/cancel', (req, res) => {
    try {
        input = req.body;
    } catch (error) {
        console.log(error);
    }
    const result = cancelTransaction(input);
    if (result) {
        const response = {
            result: {
                message: "OK",
                uuid: ""
            },
            return_code: 1,
            timestamp: Date.now(),
            http_code: 200
        };
        res.json(response);
    } else {
        res.http_code = 500;
        return res.json(
            {
                errors: 'ERROR'
            }
        )
    }
});

cancelTransaction = (input) => {
    /**
       * interact with database or middleware functions here for transaction
       * */
      return true;
  }

app.listen(process.env.PORT || 3000)