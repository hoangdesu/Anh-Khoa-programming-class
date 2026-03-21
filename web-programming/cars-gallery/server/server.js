import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'freshlysteven',
  api_key: '834482239296244',
  api_secret: '7EviaCVyhv9J4OyNW4Rw0_lQwkM',
  secure: true
});

export const getAllRootFolders = async () => {
  try {
    const result = await cloudinary.api.root_folders();
    return result.folders;
  } catch (error) {
    console.error('Cloudinary API Error:', error.message);
    throw error;
  }
};

/**
 * Fetches subfolders for a specific path
 * @param {string} path - The parent folder path
 */
export const getSubFolders = async (path) => {
  try {
    const result = await cloudinary.api.sub_folders(path);
    return result.folders;
  } catch (error) {
    console.error(`Error fetching subfolders for ${path}:`, error.message);
    throw error;
  }
};

export const getFilesInFolder = async (folderPath) => {
  try {
    // Try resources_by_asset_folder first (dynamic folder mode)
    try {
      const result = await cloudinary.api.resources_by_asset_folder(folderPath, {
        max_results: 500,
      });
      return result.resources ?? [];
    } catch (assetFolderError) {
      // Fall back to prefix-based search (fixed folder mode)
      const result = await cloudinary.api.resources({
        type: "upload",
        prefix: folderPath,
        max_results: 500,
        resource_type: "image",
      });
      return result.resources ?? [];
    }
  } catch (error) {
    console.error(`Error fetching files for ${folderPath}:`, error.message);
    throw error;
  }
};

// const start = async () => {
//   console.log('Fetching folders...');
//   const folders = await getAllRootFolders();
  
//   console.log('Available Folders:');
// //   folders.forEach(f => console.log(`- ${f.name} (Path: ${f.path})`));

//     const files = await getFilesInFolder(folders[0].path); // lambo
    
//     files.forEach(file => {
//       console.log(`  - ${file.public_id}`);
//     });
// };


const start = async () => {
  console.log("Fetching folders...");

  const folders = await getAllRootFolders();

  for (const folder of folders) {
    console.log(`\nFolder: ${folder.path}`);

    const files = await getFilesInFolder(folder.path);
    console.log(files);
    

    // files.forEach(file => {
    //   console.log(`  - ${file.public_id}`);
    // });
  }
};

// start();

// const express = require('express')
import express from 'express';
const app = express()

const port = 3001;

import cors from 'cors';

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'));

app.get('/brands', async (req, res) => {
  const carBrands = await getAllRootFolders();

  res.json(carBrands.map(brand => brand.name));
});


app.get('/cars', async (req, res) => {
  const folders = await getAllRootFolders();

  const cars = [];
  for (const folder of folders) {
    console.log(`\nFolder: ${folder.path}`);

    const files = await getFilesInFolder(folder.path);
    
    // console.log(files);
    
    // parse data
    files.forEach(img => {
      const stopIndex = img.url.indexOf('/upload') + '/upload/'.length;
      // console.log(img.url.indexOf('/upload/'));
      const parsedImageUrl = img.url.slice(0, stopIndex) + 'f_auto/' + img.url.slice(stopIndex);
      // console.log(parsedImageUrl)
      img.url = parsedImageUrl;
      img.thumbnail = img.url.slice(0, stopIndex) + 'f_auto/w_200,c_scale/' + img.url.slice(stopIndex);
    });
    
    cars.push(...files);
    // brands[folder] = files
    

    // files.forEach(file => {
    //   console.log(`  - ${file.public_id}`);
    // });
  }

  res.json(cars);
}); 


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});



