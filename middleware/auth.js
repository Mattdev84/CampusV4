
export default function (context) {
    console.log("auth callsed")
    //is authenticated
    if(!context.store.getters.isAuthenticated && context.route.name !== 'login')
    {
        context.store.dispatch('autoLogin').then((data)=>{
        
        if(!context.store.getters.isAuthenticated)
        {
                context.redirect('/login')
        }
    }).catch(()=>{
        if(context.route.name !== 'login')
        {
            context.redirect('/login')
        }
    }
    );
    }

    // if(!context.store.getters.isAuthenticated && context.route.name !== 'login')
    // {
    //     async function f1() {
    //         await context.store.dispatch('autoLogin').then((data)=>{
        
    //             if(!context.store.getters.isAuthenticated)
    //             {
    //                 context.redirect('/login')
    //             }
    //         })
    //     }

    //     f1()
    // }
}   
