require 'selenium-webdriver'
require 'test-unit'

class GoogleTest < Test::Unit::TestCase
  def setup
    @driver = Selenium::WebDriver.for :chrome
    @url = "https://www.flaticon.com/search?word=food&search-type=icons&license=selection&order_by=4&grid=small"
    @driver.manage.timeouts.implicit_wait = 30
  end

def test_google_search
    @driver.get(@url)

    @elements = @driver.find_elements(:class, 'icon--holder')

    @elements.each do |el|
      el.click
      @driver.find_element(:css, '#download > a > span').click
      @driver.find_element(:id, 'download-free').click
      @driver.find_elements(:class, 'modal-fade-screen').first.click
    end

    @query_box = @driver.find_element(:name, 'q')
    @query_box.send_keys("Selenium webdriver")
    @query_box.submit
  
    #wait = Selenium::WebDriver::Wait.new(:timeout => 30)
    #wait.until{@driver.title.include? "Selenium webdriver - Google Search"}
    #assert_equal("Selenium webdriver - Google Search", @driver.title)
  end

  def teardown
    @driver.quit
  end
end