git add .

if [ -z "$1" ]; then
  now=$(date "+%Y-%m-%d %H:%M:%S")
  git commit -m "auto commit $now"
else
  git commit -m "$1"
fi
