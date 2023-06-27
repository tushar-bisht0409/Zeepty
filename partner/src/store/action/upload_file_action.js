import {v4 as uuidv4} from 'uuid';
const AWS = require('aws-sdk');

const bucketName = "zeepty-products";
const accessKeyId = "AKIAXUDI7RNAF7DS23IT";
const secretAccessKey = "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"

export async function uploadFile(file) {

    const fileName = uuidv4();
  
    await fetch(`https://bkgvmy9qig.execute-api.ap-south-1.amazonaws.com/dev/zeepty-products/${fileName}`, {
      method: 'PUT',
      body: file,
      headers: {
        'Content-Type': file.type,
      }
    })
    .then(response => {
      console.log("response: ",response)
      console.log("fileUrl: ", `https://zeepty-products.s3.ap-south-1.amazonaws.com/${fileName}`)
      if (response.ok) {
        return {"msz": "File Uploaded Successfully", "success": true, 'fileName': fileName, fileUrl: `https://zeepty-products.s3.ap-south-1.amazonaws.com/${fileName}`}
      } else {
        return {"msz": "Something went wrong", "success": false}
      }
    })
    .catch(error => {
      console.error('There was a problem uploading the file:', error);
      return {"msz": "Something went wrong", "success": false}
    });
  }


  export async function uploadMultipleFilesToS3( files ) {

  try{

  const s3 = new AWS.S3({
    region: 'ap-south-1',
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  });

  const fileKeys = [];

  for (const file of files) {
    const reader = new FileReader();
    const fileContent = await new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });

    let fileKey = uuidv4();
    if(file.type.split('/')[0] === "image"){
      fileKey = fileKey + 'i';
    } else if(file.type.split('/')[0] === "video"){
      fileKey = fileKey + 'v';
    }
    fileKeys.push(fileKey);

    const params = {
      Bucket: bucketName,
      Key: fileKey,
      Body: new Blob([Uint8Array.from(atob(fileContent.split(',')[1]), c => c.charCodeAt(0))]),
      ContentType: file.type // set the content type to the file's MIME type
    };

    await s3.putObject(params).promise();
  }

  return {success: true,fileKeys:fileKeys};
}catch(e){
  return {success: false, err:e}
}
}

export async function deleteMultipleFilesS3( files ) {

  let objDel = [];
  for(let i = 0; i<files.length; i++){
    objDel.push({Key: files[i]});
  }
  const s3 = new AWS.S3({
    region: 'ap-south-1',
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  });

const params = {
  Bucket: bucketName,
  Delete: {
    Objects: objDel,
    Quiet: false // set to true to suppress response when successful
  }
};

s3.deleteObjects(params, (err, data) => {
  if (err) {
    return {success: false, err:err}
  }
  else {
    return {success: true}
  }
});
}

  

  export async function deleteFileS3(fileName) {
  
    await fetch(`https://bkgvmy9qig.execute-api.ap-south-1.amazonaws.com/dev/zeepty-products/${fileName}`, {
      method: 'DELETE',
      mode: 'cors',
      Accept: '*/*',
    })
    .then(response => {
      return {"msz": response, "success": true}
    })
    .catch(error => {
      console.error('There was a problem uploading the file:', error);
      return {"msz": "Something went wrong", "success": false}
    });
  }