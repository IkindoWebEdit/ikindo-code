from selenium import webdriver
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.urls import reverse
import time


class TestProject(StaticLiveServerTestCase):

    def setUp(self):
        self.browser = webdriver.Chrome('functional_tests/chromedriver.exe')

    def tearDown(self):
        self.browser.close()

    def test_login_check_if_empty(self):
        self.browser.get(self.live_server_url + "/login")
        username = self.browser.find_element_by_name("username")
        password = self.browser.find_element_by_name("password")
        self.assertEquals(username.text, '')
        self.assertEquals(password.text, '')

    def test_login_check_default_login(self):
        self.browser.get(self.live_server_url + "/login")
        username = self.browser.find_element_by_name("username")
        password = self.browser.find_element_by_name("password")
        button = self.browser.find_element_by_name("login_button")
        username.send_keys("testUser")
        password.send_keys("test")
        button.click()
        self.assertEquals(self.browser.current_url, self.live_server_url + "/adminpage/")