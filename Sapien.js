// 延迟函数
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 随机延迟 1500~3000ms
async function randomDelay(min = 1500, max = 3000) {
    const ms = Math.floor(Math.random() * (max - min + 1)) + min;
    await delay(ms);
}

// 单次任务提交（含最多3次重试）
async function postTaskWithRetry(task, maxRetries = 3) {
    const data = {
        query: `
            mutation captureUserIntent($action: ContributionEventType!) {
                captureUserIntent(action: $action)
            }
        `,
        variables: { action: task }
    };

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const res = await fetch("https://server.sapien.io/graphql", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify(data)
            });

            const json = await res.json();
            return { task, success: true, data: json };
        } catch (err) {
            if (attempt === maxRetries) {
                return { task, success: false, error: err };
            }
            await delay(1000); // 每次失败后延迟 1s 再试
        }
    }
}

// 主函数
async function PostFollowX(taskType, count = 0) {
    const AllTasks = [
        "BATTLE_VICTORY",
        "DATA_LABELLING",
        "REFERRAL"
    ];

    const Shejiao = [
        "DISCORD_CONNECTION",
        "EMAIL_CONNECTION",
        "FARCASTER_CONNECTION",
        "LINKEDIN_CONNECTION",
        "TWITTER_CONNECTION",
        "TWITTER_FOLLOW",
        "WALLET_CONNECTION",
        "COMMUNNITY_EVENT",
        "PROMOTION"
    ];

    let tasksToRun = [];

    if (taskType === "推荐" && count > 0) {
        tasksToRun = Array(count).fill("REFERRAL");

    } else if (taskType === "标注" && count > 0) {
        tasksToRun = Array(count).fill("DATA_LABELLING");

    } else if (taskType === "战斗" && count > 0) {
        tasksToRun = Array(count).fill("BATTLE_VICTORY");

    } else if (typeof taskType === "number" && Shejiao[taskType]) {
        tasksToRun = [Shejiao[taskType]];

    } else {
        return { error: "无效任务类型或参数", taskType, count };
    }

    const results = [];

    for (let i = 0; i < tasksToRun.length; i++) {
        const task = tasksToRun[i];
        const result = await postTaskWithRetry(task, 3);
        results.push(result);
        await randomDelay();
    }

    return results;
}
