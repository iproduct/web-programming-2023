export const BASE_URL = 'http://localhost:9000/todos';

class ApiClient {
    constructor(base_url){
        this.base_url = base_url;
    }

    async findAll() {
        return this.handleRequst(this.base_url);
    }
    async findById(id) {
        return this.handleRequst(`${this.base_url}/${id}`);
    }
    async create(todo) {
        return this.handleRequst(this.base_url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        });
    }
    async update(todo) {
        return this.handleRequst(`${this.base_url}/${todo.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        });
    }

    async deleteById(id) {
        return this.handleRequst(`${this.base_url}/${id}`, {
            method: 'DELETE'
        });
    }

    async handleRequst(url, options = {}) {
        try {
            const resp = await fetch(url, options);
            if(resp.status >= 400) {
                return Promise.reject(resp.body instanceof Object ? JSON.stringify(resp.body): resp.body);
            }
            return resp.json();
        } catch(error) {
            return Promise.reject(error instanceof Object ? error.message: error);
        }
    }
}

const API_CLIENT = new ApiClient(BASE_URL);
export default API_CLIENT;  // Singleton design pattern