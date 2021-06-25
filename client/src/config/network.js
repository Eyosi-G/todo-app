const request = async (method, payload, endpoint) => {
  try {
    const url = `http://localhost:8080${endpoint}`;
    switch (method) {
      case "GET": {
        const response = await fetch(url);
        if (response.ok) {
          const data = response.json();
          return data;
        } else {
          throw new Error("fetching failed");
        }
      }
      case "POST": {
        const response = await fetch(url, {
          method: "POST",
          body: payload,
          headers: {
            "content-type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw new Error("creating failed");
        }
      }
      case "PUT": {
        const response = await fetch(url, {
          method: "PUT",
          body: payload,
          headers: {
            "content-type": "application/json",
          },
        });
        if (response.ok) {
          return response.status;
        } else {
          throw new Error("updating failed");
        }
      }
      case "DELETE": {
        const response = await fetch(url, {
          method: "DELETE",
        });

        if (response.ok) {
          return response.status;
        } else {
          throw new Error("deleting failed");
        }
      }
    }
  } catch (error) {
      console.log("here")
    console.log(error);
  }
};
export default request;
