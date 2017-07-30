echo "Cleaning changes..."
git checkout .

echo "Getting changes from github..."
git pull

echo "Building the files..."
npm run build

echo "Deploy successfull."