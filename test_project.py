import unittest
from pathlib import Path


class TestFSDProject(unittest.TestCase):

    def test_index_html_exists(self):
        self.assertTrue(Path("index.html").is_file())

    def test_main_js_exists(self):
        self.assertTrue(Path("main.js").is_file())

    def test_style_css_exists(self):
        self.assertTrue(Path("style.css").is_file())

    def test_register_html_exists(self):
        self.assertTrue(Path("register.html").is_file())

    def test_index_contains_html(self):
        content = Path("index.html").read_text(encoding="utf-8")
        self.assertIn("<html", content.lower())


if __name__ == "__main__":
    unittest.main()
