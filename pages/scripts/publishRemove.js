const fs = require('fs')  
const path = require('path')

const BASE_PATH_URL = path.resolve(__dirname, '../../')

const sourceFilePath = BASE_PATH_URL + '/assets'
const targetFilePath = BASE_PATH_URL + '/nodejs/module/template'

if(fs.existsSync(targetFilePath)) { // 删除 template 目录
  files = fs.readdirSync(targetFilePath)

  files.forEach(file => {
    fs.rmSync(targetFilePath + '/' + file)
  })

  fs.rmdirSync(targetFilePath)
}

if (!fs.existsSync(targetFilePath)) {
  fs.mkdirSync(targetFilePath)
}


fs.rename(sourceFilePath + '/preview.react.html', targetFilePath + '/preview.react.html', (err) => {
  if (err) throw err;
  console.log('preview.html Rename complete!');
});

fs.rename(sourceFilePath + '/preview.vue2.html', targetFilePath + '/preview.vue2.html', (err) => {
  if (err) throw err;
  console.log('preview.html Rename complete!');
});

fs.rename(sourceFilePath + '/preview.vue3.html', targetFilePath + '/preview.vue3.html', (err) => {
  if (err) throw err;
  console.log('preview.html Rename complete!');
});



fs.rename(sourceFilePath + '/publish.react.html', targetFilePath + '/publish.react.html', (err) => {
  if (err) throw err;
  console.log('publish.html Rename complete!');
});

fs.rename(sourceFilePath + '/publish.vue2.html', targetFilePath + '/publish.vue2.html', (err) => {
  if (err) throw err;
  console.log('publish.html Rename complete!');
});

fs.rename(sourceFilePath + '/publish.vue3.html', targetFilePath + '/publish.vue3.html', (err) => {
  if (err) throw err;
  console.log('publish.html Rename complete!');
});

// if(fs.existsSync(sourceFilePath + '/js')) {
//   files = fs.readdirSync(sourceFilePath + '/js')

//   files.forEach(file => {
//     if (file.includes('publish')) {
//       fs.rename(sourceFilePath + '/js/' + file, targetFilePath + '/' + file, (err) => {
//         if (err) throw err;
//         console.log('publish.js Rename complete!');
//       }); 
//     }
//   })
// }

