//
//  DropDownMenu1.swift
//  Health1.0
//
//  Created by Darnell Khay on 9/4/20.
//  Copyright © 2020 Darnell Khay. All rights reserved.
//

import Foundation
import UIKit

extension UITextField {
func loadDropdownData(data: [String]) {
    self.inputView = MyPickerView(pickerData: data, dropdownField: self)
}
    
}
