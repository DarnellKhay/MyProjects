//
//  ViewController.swift
//  Darnell's BMR Calculator
//
//  Created by Darnell Khay on 9/2/20.
//  Copyright © 2020 Darnell Khay. All rights reserved.
//

import UIKit

class HomeScreenViewController: UIViewController {
  
    // Launch the home screen or initial view of the application
    override func viewDidLoad() {
        super.viewDidLoad()
        
            }
    
    // Function to switch to the next screen with animation
    // Linked this function to "Button1" with SwiftUI
    @IBAction func nextView() {
        let vc = storyboard?.instantiateViewController(identifier: "secondViewController") as! SecondViewController
        
        present(vc, animated: true)
    }
    

}

