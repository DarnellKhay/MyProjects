//
//  ViewController.swift
//  Health1.0
//
//  Created by Darnell Khay on 9/2/20.
//  Copyright © 2020 Darnell Khay. All rights reserved.
//

import UIKit

class HomeScreenViewController: UIViewController {
  
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
            }
    @IBAction func nextView() {
        let vc = storyboard?.instantiateViewController(identifier: "secondViewController") as! SecondViewController
        
        present(vc, animated: true)
    }
    

}

