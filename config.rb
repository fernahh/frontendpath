# Layout page
with_layout :guide do
  page "/guia/*"
end

# Relative Links
set :relative_links, true

# Markdown
set :markdown, :tables => true, :autolink => true, :gh_blockcode => true,
  :fenced_code_blocks => true, :with_toc_data => true, :line_number => true
set :markdown_engine, :redcarpet

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

helpers do

  # Create chapters basead on titles
  def chapters(post)
    File.readlines(post.source_file).collect do |x|
      if x =~ /^##\s(.*)/
        $1
      else
        nil
      end
    end.select { |x| x }
  end

end

# Sintax
activate :syntax

# Assets
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'

sprockets.append_path File.join root.to_s, "source/assets/components"

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
end
