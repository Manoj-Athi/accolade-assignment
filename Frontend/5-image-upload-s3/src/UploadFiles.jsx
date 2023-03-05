import {useState} from 'react';
import AWS from 'aws-sdk'
import { S3_bucket_name, accessKey, secretAccessKey, region } from './config'

AWS.config.update({
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
    region: region
})

const bucket = new AWS.S3()

const UploadFiles = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = async (file) => {

        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_bucket_name,
            Key: file.name
        };

        try {
            const { Location } = await bucket.upload(params).promise();
            setImageUrl(Location);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{margin: '10px'}}>
            <div>Upload image to S3 bucket</div>
            <input type="file" onChange={handleFileInput}/>
            {
                selectedFile && (
                <div style={{ margin: '10px' }}>
                    <button onClick={() => uploadFile(selectedFile)}>Upload</button>
                </div>
                )
            }
            {
                imageUrl && (
                    <div style={{ margin: '10px' }}>
                        <img src={imageUrl} alt="uploaded" />
                    </div>
                )
            }
        </div>
    )
}

export default UploadFiles;