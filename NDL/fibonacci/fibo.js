function fiboN(req, res) {
    let fiboNumbers = [0, 1];
    for (let i = 2; i < req.query.l; i++)
        fiboNumbers[i] = fiboNumbers[i - 2] + fiboNumbers[i - 1];

    return res.json({ statusText: 'done', fiboNumbers }).status(200);
}

module.exports = {
    fiboN
}