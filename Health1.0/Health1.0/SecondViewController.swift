//
//  SecondViewController.swift
//  Health1.0
//
//  Created by Darnell Khay on 9/3/20.
//  Copyright © 2020 Darnell Khay. All rights reserved.
//

import UIKit

class SecondViewController: UIViewController {
    
    // State/Variables
    
    var age: String = ""
    var sex: String = ""
    var weight: String = ""
    var height1: String = ""
    var height2: String = ""
    var menBMR: Double = 0.0
    var womenBMR: Double = 0.0
    
  
    // Variables for the UI components
    @IBOutlet weak var BMR: UILabel!
    @IBOutlet weak var Foot: UITextField!
    @IBOutlet weak var Sex: UITextField!
    @IBOutlet weak var Years: UITextField!
    @IBOutlet weak var Inches: UITextField!
    @IBOutlet weak var Pounds: UITextField!
    @IBOutlet weak var BMRButton: UIButton!
    
    // Function to load the second screen after switching from the initial home screen of the application
    override func viewDidLoad() {
        super.viewDidLoad()
        BMRButton.isEnabled = false
        [Foot, Sex, Years, Inches, Pounds].forEach({ $0.addTarget(self, action: #selector(editingChanged), for: .editingChanged) })
    }
    
/*
     Function to track the moment a textField is being filled in
     - Enable the BMRButton once the textFields have been filled in appropriately
     */
    @objc func editingChanged(_ textField: UITextField) {
        if textField.text?.count == 1 {
            if textField.text?.first == " " {
                textField.text = ""
                return
            }
        }
        guard
            let age = Years.text, !age.isEmpty,
            let weight = Pounds.text, !weight.isEmpty,
            let height1 = Foot.text, !height1.isEmpty,
            let height2 = Inches.text, !height2.isEmpty,
            let sex = Sex.text, !sex.isEmpty
        else {
            
            BMRButton.isEnabled = false
            return
        }
        BMRButton.isEnabled = true
    }
    
    
   /*
     Function to calculate the basal metabollic rate of a person
     - Takes into account of age, weight, height, and sex
     - Outputs the amount of calories the person burns by default (basal metabollic rate)
     */
      
    @IBAction func calcCal(sender: UIButton){

        age = Years.text!
        let ageVal = Double(age)
        
        weight = Pounds.text!
        var weightVal = Double(weight)
        weightVal = weightVal! * 0.453592
            
        height1 = Foot.text!
        var height1Val = Double(height1)
        height1Val = height1Val! * 30.48
        
        height2 = Inches.text!
        var height2Val = Double(height2)
        height2Val = height2Val! * 2.54
        
        let heightVal = height1Val! + height2Val!
        
        sex = Sex.text!
        if sex == "Male" || sex == "male" {
            menBMR = 88.362 + (13.397 * weightVal!) + (4.799 * heightVal) - (5.677 * ageVal!)
        }
        
        if sex == "Female" || sex == "female" {
             womenBMR = 447.593 + (9.247 * weightVal!) + (3.098 * heightVal) - (4.33 * ageVal!)
        }
        
        if menBMR != 0 {
            BMR.text = "\(Int(menBMR)) Calories"
      
        }
        if womenBMR != 0 {
            BMR.text = "\(Int(womenBMR)) Calories"
        }
        
        if BMR.text != "" {
            menBMR = 0.0
            womenBMR = 0.0
        }
        }
        
}



