import apiClient from "./api-client";

interface Entity {
  id: number;
}

class HTTPService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController(); // Cancelling FETCH requests
    const req = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { req, cancelReq: () => controller.abort() };
  }

  delete(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  add<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update<T extends Entity>(entity: T) {
    return apiClient.patch(this.endpoint + "/" + entity.id, entity);
  }
}

const create = (endpoint: string) => new HTTPService(endpoint);
export default create;
