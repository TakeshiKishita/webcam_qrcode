#!/usr/bin/ruby

list = []
File.open("./result.txt") {|f|
  while line = f.gets
    list.push line.chomp.gsub("<br>", "")
  end
}

while true
  result = `zbarimg -q ./public/images/raspi.jpg`
  next if result.empty?
  read_text = result.gsub("QR-Code:", "").chomp
  if !list.include?(read_text)
    list.push read_text
    File.open("./result.txt", "a") {|f|
      f.puts read_text + "<br>"
    }
  end
  sleep(0.5)
end
