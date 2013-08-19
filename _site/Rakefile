require 'tmpdir'
# Change your GitHub reponame
GITHUB_REPONAME = "notch8/daily-bandwidth"


desc "Generate blog files"
task :generate do
  system "jekyll build"
end


desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    cp_r "_site/.", tmp
    Dir.chdir tmp
    system "git init"
    system "git add ."
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m #{message.shellescape}"
    system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
    system "git checkout -b gh-pages"
    system "git push origin gh-pages --force"
  end
end