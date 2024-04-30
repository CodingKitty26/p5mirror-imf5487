cd "C:\Users\eatsl\Documents\GitHub\p5mirror-imf5487\downloads/../p5projects"
#
echo unzip 1 "ims05 -imf5487-Z8XfIhlSf"
rm -rf "./ims05 -imf5487-Z8XfIhlSf"
mkdir "./ims05 -imf5487-Z8XfIhlSf"
pushd "./ims05 -imf5487-Z8XfIhlSf" > /dev/null
unzip -q "../../downloads/zips/ims05 -imf5487-Z8XfIhlSf"
popd > /dev/null
#
echo unzip 2 "Twinkle, Twinkle-0CuwkpOYA"
rm -rf "./Twinkle, Twinkle-0CuwkpOYA"
mkdir "./Twinkle, Twinkle-0CuwkpOYA"
pushd "./Twinkle, Twinkle-0CuwkpOYA" > /dev/null
unzip -q "../../downloads/zips/Twinkle, Twinkle-0CuwkpOYA"
popd > /dev/null
#
echo unzip 3 "Jump, Jump Ninja-aYcGpc1RU"
rm -rf "./Jump, Jump Ninja-aYcGpc1RU"
mkdir "./Jump, Jump Ninja-aYcGpc1RU"
pushd "./Jump, Jump Ninja-aYcGpc1RU" > /dev/null
unzip -q "../../downloads/zips/Jump, Jump Ninja-aYcGpc1RU"
popd > /dev/null
#
echo unzip 4 "Generative Art-MYwmZ15pW"
rm -rf "./Generative Art-MYwmZ15pW"
mkdir "./Generative Art-MYwmZ15pW"
pushd "./Generative Art-MYwmZ15pW" > /dev/null
unzip -q "../../downloads/zips/Generative Art-MYwmZ15pW"
popd > /dev/null
#
echo unzip 5 "Teachable Plushies-5F6JIqsjj"
rm -rf "./Teachable Plushies-5F6JIqsjj"
mkdir "./Teachable Plushies-5F6JIqsjj"
pushd "./Teachable Plushies-5F6JIqsjj" > /dev/null
unzip -q "../../downloads/zips/Teachable Plushies-5F6JIqsjj"
popd > /dev/null
#
echo unzip 6 "Final Project - imf5487-LQqwfLma6"
rm -rf "./Final Project - imf5487-LQqwfLma6"
mkdir "./Final Project - imf5487-LQqwfLma6"
pushd "./Final Project - imf5487-LQqwfLma6" > /dev/null
unzip -q "../../downloads/zips/Final Project - imf5487-LQqwfLma6"
popd > /dev/null
#
echo unzip 7 "HTML-0H6vEh9rb"
rm -rf "./HTML-0H6vEh9rb"
mkdir "./HTML-0H6vEh9rb"
pushd "./HTML-0H6vEh9rb" > /dev/null
unzip -q "../../downloads/zips/HTML-0H6vEh9rb"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi