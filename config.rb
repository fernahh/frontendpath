# Layout page
with_layout :guide do
  page "/guia/*"
end

with_layout :guide do
  page "/guide/*"
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

  def pt_url(url)
    current_url = url

    if current_url.include?("semantics")
      result_url = "/guia/a-semantica.html"
    elsif current_url.include?("accessibility")
      result_url = "/guia/a-acessibilidade.html"
    elsif current_url.include?("the-css")
      result_url = "/guia/o-css.html"
    elsif current_url.include?("the-javascript")
      result_url = "/guia/o-javascript.html"
    else
      result_url = "/"
    end

    result_url
  end

  def english_url(url)
    current_url = url

    if current_url == "/" || current_url.include?("guia")
      if current_url.include?("semantica")
        result_url = "/guide/the-semantics.html"
      elsif current_url.include?("acessibilidade")
        result_url = "/guide/the-accessibility.html"
      elsif current_url.include?("o-css")
        result_url = "/guide/the-css.html"
      elsif current_url.include?("o-javascript")
        result_url = "/guide/the-javascript.html"
      else
        result_url = "/en"
      end
    else
      result_url = current_url
    end

    result_url
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
