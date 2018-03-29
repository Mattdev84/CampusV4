export default function (context) {
    console.log("middlewareCalled Auto")

    context.store.dispatch('autoLogin')
}