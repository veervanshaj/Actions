// workflow-> file whcih store Instruction/steps for Ci/cd
/**
 * event -- when to run this workflow like when push ,pr ,main(specific branch) , on a particular schdule or any specific condition
        using on keyword 
        if have to push then use keyword push and if need to pull then then use pull_request
        * for multipal events on:[add all the events ]
        * you can schdule events usinh cron job
        * 
 * Job -- what to do 
 * Steps -- it is a list          //cooking instrauctions  
 *
 */

/** GitHub actins
 * push->workflow->start job(VM create can be ubantu windos mac etc)->job Completed -> steps
 * Each job have independent VM
 */

/**
 * Day 2 
 * by default jobs run parllery
 * needs:used to run job in sequence 
 * actions: are resusable code provied by github to perfom comman task like clone repo,setup node
 * when new job create new vm it have no enviremnt so need to setup it 
 * repo clone -> node setup -> depencency -> nom run test
 * THIS CAN be automoate usising action -> uses 
 */
// "test": "exit code 1"

/**
 * HW
 * CI workflow
 * 1) check linting   by eslint ---it is basly 
 * 2) test run
 * 3) code building 
 */

/**
 * Day
 * Artifacts
 * It is a storgae to share data between  multipal jobs
 * you can upload and dounload it across jobs
 * upload: actions/upload-artifact
 */