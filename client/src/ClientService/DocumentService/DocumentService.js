export class DocumentService {
  async getAllDocuments(userId) {
    const data = await fetch(`/user/${userId}/document`).then((response) => {
      return response.json();
    });
    return data;
  }

  async createDocument(userId, name) {
    const url = `/document?user_id=${userId}`;
    const currentDate = new Date();
    const newName = `${name}${Math.random()}-document{${
      Math.random() * 10 * Math.random()
    }}`;
    const body = {
      createdAt: currentDate.toISOString(),
      name: newName,
    };
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const jsonObject = await result.json();
    return jsonObject.id;
  }

  async uploadDocument(file, docId) {
    const url = `/document/${docId}/upload`;
    const request = new XMLHttpRequest();
    request.open("POST", url);
    request.send(file);
  }

  async makeDocument(userId, name, document) {
    const docId = await this.createDocument(userId, name);
    const result = await this.uploadDocument(document, docId);
  }

  async shareDocument(userId, docId) {
    const url = `/user/${userId}/document/${docId}`;
    const response = await fetch(url, {
      method: "PUT",
    });
  }
}
