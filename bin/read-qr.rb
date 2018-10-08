#!/usr/bin/ruby
while true
  result = `zbarimg ./public/images/raspi.jpg`
  next if result.empty?
  File.open("./result.txt", "a") {|f|
    f.puts result.gsub("QR-Code:", "").chomp + "<br>"
  }
  sleep(0.5)
end
