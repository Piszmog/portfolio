export const jsx = `const App = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;`;

export const go = `package main

func main() {
  fmt.Println("Hello")
}`;

export const bash = `#!/bin/bash

printf "Hello"`;

export const python = `#!/usr/bin/env python

def main():
  print('Hello')

def __main__():
  main()
`;

export const cpp = `#include <iostream>
using namespace std;

int main() {
  cout << "Hello" << endl;
  return 0;
}`;

export const makefile = `.PHONY: all
all: @echo "Hello"`;
