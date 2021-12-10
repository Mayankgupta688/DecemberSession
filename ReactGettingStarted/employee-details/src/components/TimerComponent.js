export default function TimerComponent() {

    function getCurrentTime() {
        var currentDate = new Date();
        return currentDate.getHours() + " : " + currentDate.getMinutes() + " : " + currentDate.getSeconds();
    }

    return (
        <div>
            <h1>Current Time is: {getCurrentTime()}</h1>
        </div>
    )
}