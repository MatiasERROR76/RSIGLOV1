export const createReceta = (RecetaForm)=>{
    return {
 
        "recipe": [
            {
                "product": {
                    "id": RecetaForm.id,
                },
                "quantity": {
                    "value": RecetaForm.value,
                    "measure": {
                        "code": RecetaForm.code,
                    }
                }
            }]}
    }




    