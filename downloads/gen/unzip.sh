cd "C:\Users\eatsl\Documents\GitHub\p5mirror-imf5487\downloads/../p5projects"
#
echo unzip 1 "ims03 - Isadora-TGbYD1IF4"
rm -rf "./ims03 - Isadora-TGbYD1IF4"
mkdir "./ims03 - Isadora-TGbYD1IF4"
pushd "./ims03 - Isadora-TGbYD1IF4" > /dev/null
unzip -q "../../downloads/zips/ims03 - Isadora-TGbYD1IF4"
popd > /dev/null
#
echo unzip 2 "Generative Art-MYwmZ15pW"
rm -rf "./Generative Art-MYwmZ15pW"
mkdir "./Generative Art-MYwmZ15pW"
pushd "./Generative Art-MYwmZ15pW" > /dev/null
unzip -q "../../downloads/zips/Generative Art-MYwmZ15pW"
popd > /dev/null
#
echo unzip 3 "ims01 - Isadora-cpZEbWnnf"
rm -rf "./ims01 - Isadora-cpZEbWnnf"
mkdir "./ims01 - Isadora-cpZEbWnnf"
pushd "./ims01 - Isadora-cpZEbWnnf" > /dev/null
unzip -q "../../downloads/zips/ims01 - Isadora-cpZEbWnnf"
popd > /dev/null
#
echo unzip 4 "ims02 - Isadora-9Y4-HpXAu"
rm -rf "./ims02 - Isadora-9Y4-HpXAu"
mkdir "./ims02 - Isadora-9Y4-HpXAu"
pushd "./ims02 - Isadora-9Y4-HpXAu" > /dev/null
unzip -q "../../downloads/zips/ims02 - Isadora-9Y4-HpXAu"
popd > /dev/null
#
echo unzip 5 "Body Tracking HW-6Mb6vROaW"
rm -rf "./Body Tracking HW-6Mb6vROaW"
mkdir "./Body Tracking HW-6Mb6vROaW"
pushd "./Body Tracking HW-6Mb6vROaW" > /dev/null
unzip -q "../../downloads/zips/Body Tracking HW-6Mb6vROaW"
popd > /dev/null
#
echo unzip 6 "Cherry Blossoms Blowing-zlitcRZVBS"
rm -rf "./Cherry Blossoms Blowing-zlitcRZVBS"
mkdir "./Cherry Blossoms Blowing-zlitcRZVBS"
pushd "./Cherry Blossoms Blowing-zlitcRZVBS" > /dev/null
unzip -q "../../downloads/zips/Cherry Blossoms Blowing-zlitcRZVBS"
popd > /dev/null
#
echo unzip 7 "Isadora's Self Portrait-qEFzoML2q"
rm -rf "./Isadora's Self Portrait-qEFzoML2q"
mkdir "./Isadora's Self Portrait-qEFzoML2q"
pushd "./Isadora's Self Portrait-qEFzoML2q" > /dev/null
unzip -q "../../downloads/zips/Isadora's Self Portrait-qEFzoML2q"
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