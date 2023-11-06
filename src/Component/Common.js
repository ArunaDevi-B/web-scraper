const postApi = async (url, data, post) => {
 try {
   const apiURL = "http://localhost:9000/";
   const response = await fetch(apiURL + url, {
     method: post,
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(data),
   });

   if (!response.ok) {
     throw new Error(`HTTP error! Status: ${response.status}`);
   }
   const responseData = await response.json();
   return responseData;
 } catch (error) {
   console.error(error);
 }
};

const api = {
wordCount: async () => {
    try{
  let url = document.getElementById("basic-url").value;
  if (url.length > 8) {
    let apiurl = "geturlhistory/CREATE";
    let weblink = {
      url: url,
    };
    const response = await postApi(apiurl, weblink, "POST");
    if (response.status == true) {
      return response;
    } else {
      return response;
    }
  } else {
    let message = { message: "Enter a valid url" };
    return message;
  }
} catch (error) {
    console.error(error);
  }
},

fetchData: async () => {
  try {
    let apiurl = "geturlhistory/READ";
    let data = {};
    const response = await postApi(apiurl, data, "POST");
    return response;
  } catch (error) {
    console.log(error);
  }
},

addToFavourite: async (id) => {
  try {
    let apiurl = "geturlhistory/UPDATE";
    let data = {
      url_id: id,
      favourite: true,
    };
    const response = await postApi(apiurl, data, "POST");
    if (response.data.length > 0) {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
},

deleteURL: async (id) => {
  try {
    let apiurl = "geturlhistory/DELETE";
    let data = {
      url_id: id,
    };
    const response = await postApi(apiurl, data, "POST");
    if (response.data.length > 0) {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}
}
export default api;