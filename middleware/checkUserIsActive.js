export default function ({  redirect ,app}) {




    if(app.$auth.loggedIn){

        if(!(app.$auth?.user?.data?.is_active)){

            return redirect('/user');
        }
    }


}