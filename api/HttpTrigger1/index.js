module.exports = async function (context, req) {

  try {
      context.log('JavaScript HTTP trigger function processed a request.');

      // Read incoming data
      // const name = req.query.name;
      // const sport = req.query.sport;

      // // fail if incoming data is required
      // if (!name || !sport) {

      //     context.res = {
      //         status: 400
      //     };
      //     return;
      // }

      // Add or change code here
      const message = `Vamsi likes Cricket`;

      // Construct response
      const responseJSON = {
          "name": "vamsi",
          "sport": "cricket",
          "message": message,
          "success": true
      }

      context.res = {
          // status: 200, /* Defaults to 200 */
          body:  {
            JSON: `response: ${responseJSON}`
          },
          contentType: 'application/json'
      };
  } catch(err) {
      context.res = {
          status: 500
      };
  }
}