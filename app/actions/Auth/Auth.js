'use server'


export async function doLogin (formData) {

    const action = formData.get('action')

    console.log(action)
}



export async function doLogOut () {

}

