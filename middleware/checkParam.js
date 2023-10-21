export default function ({  redirect ,app}) {


    let params=app.context.route.query.package
    const paramValue = parseInt(params, 10);


    console.log(isNaN(paramValue))
    console.log(params)
    if (isNaN(paramValue) || !(paramValue  >= 0 || paramValue  <  4)) {

        return redirect('/');
    }
}