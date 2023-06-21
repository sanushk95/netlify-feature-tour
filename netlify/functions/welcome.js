exports.handler = async () => {
    const mySecret = process.env.MY_SECRET;
    return {
        statusCode: 200,
        body: 'Welcome To My Website!',
    }
}