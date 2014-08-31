#!/usr/bin/env ruby

require 'opal'

File.open('compiled.js', 'w') do |f|
  f.write(Opal.compile(File.read('fizzbuzz.rb')))
end

File.open('opal.js', 'w') do |f|
  f.write(Opal::Builder.build('opal'))
end
