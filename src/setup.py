[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"

[project]
name = "jam-analytics"
version = "0.1.0"
dependencies = [
    "fastapi",
    "uvicorn",
    "pydantic"
]

[tool.setuptools]
packages = ["src", "src.components"]