echo "Cleaning changes..."
git checkout .

echo "Getting changes from github..."
git pull

echo "Installing dependecies..."
npm install

echo "Building the files..."
npm run build

echo "Deploy successfull."