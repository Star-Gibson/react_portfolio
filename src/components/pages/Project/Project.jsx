import React, { useState } from 'react'
import "../Project/Project.css"

const Project = () => {
  const [reactEmployeeDirectory] = useState({
        title: "React Employee Directory",
        deployed: "https://star-gibson.github.io/React_EmployeeDirectory/",
        repo: "https://github.com/Star-Gibson/React_EmployeeDirectory",
        info: "The Employee Directory Application was built using ReactJS. This was my first project using react and look forward to continously improving my react skillset and bulding beatiful web applications moving forward. This application calls the Random User API and allows the user to sort the responses by both, first and last name.",
    })

    const [dailyServiceRecord] = useState({
        title: "Daily Service Record",
        deployed: "https://mighty-spire-89072.herokuapp.com/",
        repo: "https://github.com/diminako/daily_service_record",
        info: "The Daily Service Record is a Full-Stack MVC web application that authenticates users based off of their login credentials. The goal of this project was to build a CMS for a auto repair technician organization in which would allow the administrators to understand their teams' progress. Technologies utilized consisted of HTML5, CSS3, Bulma JavaScript, jQuery, HandlebarsJS, NodeJS, mySQL, Sequelize ORM, and deployment via Heroku.",
    });

    const [budgetTracker] = useState({
        title: "Budget Tracker",
        deployed: "https://hidden-ocean-67098.herokuapp.com/",
        repo: "https://github.com/Star-Gibson/PWA_BudgetApplication",
        info: "The Budget Tracker is a progressive web application that gives users the ability to track their budget by allowing them to add expenses or deposits by using the add funds/subtract funds buttons. This application has the ability to function while offline by storing offline transactions to the IndexDB. Upon going back online these transactions are transferred to the mongoDB.",
    });

    const [workScheduler] = useState({
        title: "Work Day Scheduler",
        deployed: "https://star-gibson.github.io/day__planner/",
        repo: "https://github.com/Star-Gibson/Team_Generator",
        info: "This application was one that I created to meet the requirements while attending UNC-C's Coding Bootcamp. It was designed to help us further our understading of jQuery and JavaScript by creating a daily work planner that allows the user to plan out the work day.",
    });

    return (
        <div className="container">
            <h1>Portfolio</h1>
            <div className="card" id="portfolioDisplay">
                <img className="card-img-top"src="/assets/img/DSR.gif"alt="dailyServiceRecord"/>
                    <div className="card-body">
                        <h5 className="card-title">{dailyServiceRecord.title}</h5>
                        <p className="card-text">{dailyServiceRecord.info}</p>
                        <div className="cardButtons">
                        <a href={dailyServiceRecord.repo}className="btn btn-primary">Repository</a>
                        <a href={dailyServiceRecord.deployed}className="btn btn-primary">Live Application</a>
                        </div>
                    </div>
            </div>
            <div className="card" id="portfolioDisplay">
               <img className="card-img-top"src="/assets/img/reactEmployeeDirectory.png" alt="reactEmployeeDirectory"/>
                    <div className="card-body">
                        <h5 className="card-title">{reactEmployeeDirectory.title}</h5>
                        <p className="card-text">{reactEmployeeDirectory.info}</p>
                        <div className="cardButtons">
                        <a href={reactEmployeeDirectory.repo} className="btn btn-primary">Repository</a>
                        <a href={reactEmployeeDirectory.deployed}className="btn btn-primary">Live Application</a>
                        </div>
                    </div>
            </div>
            <div className="card" id="portfolioDisplay">
                <img className="card-img-top"src="/assets/img/budgetTracker.png" alt="budgetTrackerImage"/>
                    <div className="card-body">
                        <h5 className="card-title">{budgetTracker.title}</h5>
                        <p className="card-text">{budgetTracker.info}</p>
                        <div className="cardButtons">
                        <a href={budgetTracker.repo}className="btn btn-primary">Repository</a>
                        <a href={budgetTracker.deployed} className="btn btn-primary">Live Application</a>
                        </div>
                    </div>
            </div>
            <div className="card" id="portfolioDisplay">
               <img className="card-img-top"src="/assets/img/workdayScheduler.png" alt="workdayScheduler"/>
                    <div className="card-body">
                        <h5 className="card-title">{workScheduler.title}</h5>
                        <p className="card-text">{workScheduler.info}</p>
                        <div className="cardButtons">
                        <a href={workScheduler.repo} className="btn btn-primary">Repository</a>
                        <a href={workScheduler.deployed}className="btn btn-primary">Live Application</a>
                        </div>
                    </div>
            </div>
        </div>
            
    )
}

export default Project;
