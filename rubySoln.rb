def toCamelCase(word)
    # split the word at the dashes and underscores
    spl = word.split(/[_-]+/)
  
    # take the first word as it is to remain the same
    first = spl[0]
  
    # loop through remaining words and capitalize the first letter
    for i in 1...spl.length
      first += spl[i][0].upcase + spl[i][1..-1]
    end
  
    if word.length > 0
      return first
    else
      return ""
    end
  end
  
  puts toCamelCase("do_Dat_ting")

#   Alternative
def to_camel_case(str)
    new_str = str.split(/[-_]+/)
    puts "New_str: #{new_str}"
    conv = new_str[0]
  
    if str == ""
      return ""
    else
      for c in 1...new_str.length
        word = new_str[c]
        puts word
        conv += word[0].upcase + word[1..-1]
      end
      return conv
    end
  end
  
  puts to_camel_case("the-stealth-warrior")