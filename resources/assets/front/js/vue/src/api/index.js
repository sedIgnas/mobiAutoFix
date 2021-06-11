import axios from 'axios';

class API {
    static domain = 'http://127.0.0.1:8000';

    static async getVehicles() {
        try {
            const {data} = await axios.get(`${this.domain}/api/vehicles`);
            return data;
        } catch (err) {
            throw err.message;
        }
    }

    static async getUserVehicle(id) {
        try {
            const {data} = await axios.get(`${this.domain}/api/vehicles/vehicle/${id}`);
            console.log(data[0]);
            return data;
        } catch (err) {
            throw err.message;
        }
    }

    static async postJob(body) {
        try {
            const {data} = await axios.post(`${this.domain}/api/jobs/create`, body);
            return data;
        } catch (err) {
            throw err.message;
        }
    }

    static async getJobs() {
        try {
            const {data} = await axios.get(`${this.domain}/api/jobs`);
            return data;
        } catch (err) {
            throw err.message;
        }
    }

    static async getJob(id) {
        try {
            const { data } = await axios.get(`${this.domain}/api/jobs/${id}`);
            console.log(data);
            return data;
        } catch (err) {
            throw err.message;
        }
    }
}

export default API;
