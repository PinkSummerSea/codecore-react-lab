const baseURL = "http://127.0.0.1:3000/api/v1";

export const Product = {
    index() {
      return fetch(`${baseURL}/products`).then((response) => {
        console.log(response);
        return response.json();
      });
    },
  
    show(id) {
      return fetch(`${baseURL}/products/${id}`).then((res) => res.json());
    },
  
    create(productFormData) {
          return fetch(`${baseURL}/products/`, {
              // headers: {
              // 	token: jwt
              // },
        // credentials: 'include',
              method: 'POST',
              body: productFormData
          })
              .then(res => res.json())
              .catch(console.error);
      }
};


export const Session = {
    create(params) {
      // let formData = new URLSearchParams(Object.entries(params)).toString();
      return fetch(`${baseURL}/session`, {
        method: 'POST',
        credentials: 'include', //need this for cookies to be allowed to be sent
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded'
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
        // body: formData
      }).then(res => res.json());
    }
}

export const User ={
  current(){
    return fetch(`${baseURL}/users/current`, {
        credentials: 'include', //need for cookies to be allowed to be sent cross-origin
    }).then(res => res.json());
  },
}