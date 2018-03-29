export default function (context) {
    console.log("auth callsed")
    //is authenticated
    if(!context.store.getters.isAuthenticated && context.route.name !== 'login')
    {
        context.store.dispatch('autoLogin').then((data)=>{
        
        if(!context.store.getters.isAuthenticated)
        {
                context.redirect('/login')
        }else {
            console.log(context)
            context.redirect(context.from.fullPath)
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
    //     console.log(context)
    //     context.redirect('context.from.path')
        
    // }

}