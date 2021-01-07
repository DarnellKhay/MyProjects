//
//  DropDownMenu2.swift
//  Health1.0
//
//  Created by Darnell Khay on 9/4/20.
//  Copyright © 2020 Darnell Khay. All rights reserved.
//

import Foundation
import UIKit

class MyPickerView : UIPickerView, UIPickerViewDataSource, UIPickerViewDelegate {

   var pickerData : [String]!
   var activityLevelsTextField : UITextField!
    let rect = CGRect(x: 0, y: 0, width: 0, height: 0)
    
   init(pickerData: [String], dropdownField: UITextField) {
    super.init(frame: rect)
    
    self.pickerData = pickerData
       self.activityLevelsTextField = dropdownField

       self.delegate = self
       self.dataSource = self

    DispatchQueue.global(qos: .userInitiated).async{
           if pickerData.count > 0 {
               self.activityLevelsTextField.text = self.pickerData[0]
            self.activityLevelsTextField.isEnabled = true
           } else {
               self.activityLevelsTextField.text = nil
            self.activityLevelsTextField.isEnabled = false
           }
    }
   }

   required init?(coder aDecoder: NSCoder) {
       fatalError("init(coder:) has not been implemented")
   }

func numberOfComponents(in pickerView: UIPickerView) -> Int {
    return 1
}

func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
    return pickerData.count
}
func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
    return pickerData[row]
}

func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int){
    activityLevelsTextField.text = pickerData[row]
}
}
